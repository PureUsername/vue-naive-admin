import { sStorage } from '@/utils/cache'

export const activeTag = sStorage.get('activeTag')
export const tags = sStorage.get('tags')

export const WITHOUT_TAG_PATHS = ['/404', '/login']
