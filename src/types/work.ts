export type Work = {
  heading: string,
  visible: boolean,
  items?: WorkItem[]
}

export type WorkItem = {
  id?: string,
  company: string,
  position: string,
  website?: string,
  startDate: string,
  endDate?: string,
  summary: string
}
