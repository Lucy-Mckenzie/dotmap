import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { Pin, PinData } from '../../models/pins.models.ts'

export function usePins() {
  return useQuery({
    queryKey: ['pins'],
    queryFn: async () => {
      try {
        const result = await request.get('/api/v1/pins')
        return result.body as Pin[]
      } catch (error) {
        console.error('Error fetching pins:', error)
        return []
      }
    },
  })
}

export function usePinById(id: number) {
  return useQuery({
    queryKey: ['pins', id],
    queryFn: async () => {
      try {
        const result = await request.get(`/api/v1/pins/${id}`)
        return result.body as Pin
      } catch (error) {
        console.error('Error fetching pin:', error)
        return null
      }
    },
  })
}

export function usePinByUser(user: string) {
  return useQuery({
    queryKey: ['pins', 'user', user],
    queryFn: async () => {
      try {
        const result = await request.get(`/api/v1/pins/user/${user}`)
        return result.body as Pin[]
      } catch (error) {
        console.error('Error fetching pins:', error)
        return []
      }
    },
  })
}

export function useAddPin(id: number) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (pin: PinData) => {
      await request.post('/api/v1/pins').send(pin)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['pins', id] })
    },
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

export function useUpdatePinById(id: number) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (pin: PinData) => {
      await request.put(`/api/v1/pins/${id}`).send(pin)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pins', id] })
    },
  })
}
