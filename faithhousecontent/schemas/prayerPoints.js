export default {
    name: 'prayerPoints',
    title: 'Prayer Guide',
    type: 'document',
  
    fields: [

        {
            name: 'title',
            title: 'Title of the prayers',
            type: 'string',
            description: 'What is the title of this prayers',
        },
        {
            name: 'focus',
            title: 'Prayer focus',
            type: 'array',
            of: [{type: 'string'}],
            description: 'Who is this prayer for  Or what is the focus. E.g women in labour, students with blocked brain',
            required: true,
        },
        {
            name: 'emphasis',
            title: 'Further description',
            type: 'array',
            of: [{type: 'string'}],
            description: 'Further description on how to carry out this prayers if any. E.g Prayer at midnight. This is August 2023 prayer guide',
            required: true,
        },

      {
        name: 'date',
        title: 'Today',
        type: 'date',
        options: {
          dateFormat: 'DD-MM-YYYY',
        },
      },

      {
        name: 'content',
        title: 'Prayer points',
        type: 'array',
        of: [{type: 'block'}],
        description: 'enter prayer points here.',
        required: true,
    },
  
      {
        title: 'Image',
        name: 'prayerImage',
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
  