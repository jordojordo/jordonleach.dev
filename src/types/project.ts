export type Project = {
  heading: string,
  visible: boolean,
  items?: ProjectItem[]
}

export type ProjectItem = {
  id?: string,
  title: string,
  link?: string,
  date: string,
  endDate?: string,
  description: {
    summary: string[],
    features?: string[]
  }
}

export type ProjectExp = {
  project: Project
}