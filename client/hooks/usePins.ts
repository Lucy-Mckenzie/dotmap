import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import request from 'superagent'
import { getPins } from '../apis/pins-api.ts'
import { Pin, PinData } from '../../models/pins.models.ts'
import { getPinById } from '../../server/db/pins.db-fn-calls.ts'

export function usePins() {
  const query = useQuery({ queryKey: ['pins'], queryFn: getPins })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}


export function usePinsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pins'] })
    },
  })
  return mutation
}

export function useAddPin() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (pin: PinData) => {
      await request.post('/api/v1/pins').send(pin)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['pins'] })
    },
  })
}

export function usePinById(id: number) {
  return useQuery<Pin, Error>({
    queryKey: ['pins', id],
    queryFn: () => getPinById(id),
    enabled: !!id
  })
}

export function useDeletePin() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: number) => {
      await request.delete(`/api/v1/pins/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pins'] })
    },
  })
}

export function useUpdatePin() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ id, ...pin }: Pin) => {
      await request.put(`/api/v1/pins/${id}`).send(pin)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pins'] })
    },
  })
}