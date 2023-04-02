export default {
  name: 'yearlyFocus',
  title: 'Yearly Prophetic Focus',
  type: 'document',

  fields: [
    {
      name: 'year',
      title: 'Select Year',
      type: 'date',
      description: 'Compulsory. Choose the first date of the year.',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },

    {
      name: 'yearlyTheme',
      title: 'Yearly Theme',
      type: 'string',
      description: 'What is the Month theme?',
      required: true,
    },

    {
      name: 'yearlyEmphasis',
      title: 'Yearly emphasis',
      type: 'string',
      description: 'What is the Month emphasis',
      required: true,
    },

    {
      name: 'yearlyScriptures',
      title: 'Scriptures',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Enter the scriptures',
      required: true,
    },

    {
      name: 'yearlyContent',
      title: 'Content',
      description: 'Enter the content of the prophetic focus. Stylize as you want',
      type: 'array',
      of: [{type: 'block'}],
      required: true,
    },

    {
      title: 'Image',
      name: 'yearFocusImage',
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
