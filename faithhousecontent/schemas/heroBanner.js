export default {
  name: 'heroBanner',
  title: 'Hero Banner Content',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      description: 'Which heading are you editting',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Caption', value: 'Caption'},
          {title: 'Year Focus', value: 'Year Focus'},
          {title: 'Month Focus', value: 'Focus'},
        ],
      },
      required: true,
    },

    {
      name: 'heading',
      title: 'Enter Heading',
      type: 'string',
      description: 'What is the heading to display?',
      required: true,
    },

    {
      title: 'Image',
      name: 'headingImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      description: 'Will you like to add an image',
    },

    {
      name: 'editor',
      title: 'Editor',
      type: 'string',
      description: 'Who is editting this',
    },
  ],
}
