import type { CollectionConfig } from 'payload'

export const Category: CollectionConfig = {
  slug: 'category',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
      unique: true,
    },
  ],
}
