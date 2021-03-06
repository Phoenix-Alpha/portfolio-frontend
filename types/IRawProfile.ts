import { IRawUploadFile } from './IRawUploadFile'

export interface IRawProfile {
  id: string
  attributes: {
    firstName: string
    lastName: string
    email: string
    headline: string
    bio?: string
    country?: string
    state?: string
    city?: string
    address?: string
    calendly?: string
    linkedin?: string
    google?: string
    stackoverflow?: string
    github?: string
    avatar?: IRawUploadFile
    resume?: IRawUploadFile
  }
}
