import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Website',

  projectId: 'eq5snmlv',
  dataset: 'production',

  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
