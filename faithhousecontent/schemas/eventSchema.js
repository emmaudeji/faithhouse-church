export default {
  name: 'eventSchema',
  title: 'Events',
  type: 'document',
  description: 'Update events for the Faithhouse websites.',

  fields: [
    {
      title: 'Select Event',
      description:
        'Which event is this? If event is not listed, then type the event title in the next field',
      name: 'title',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Women Prayer And Success Service', value: 'Women Prayer And Success Service'},
          {title: 'Teens Hub', value: 'Teens Hub'},
          {title: '1st Sons & Daughters Forum', value: '1st Sons & Daughters Forum'},
          {title: 'Girls & Ladies Leadership World', value: 'Girls & Ladies Leadership World'},
          {title: 'Anointing & Breakthrough Service', value: 'Anointing & Breakthrough Service'},
          {title: 'Family & Friends Success Service', value: 'Family & Friends Success Service'},
          {title: 'Thanksgiving & Victory Service', value: 'Thanksgiving & Victory Service'},
          {title: 'Incubate Campus Leaders Service', value: 'Incubate Campus Leaders Service'},
          {title: 'Prayer-Quake & Communion Service', value: 'Prayer-Quake & Communion Service'},
          {title: '12 Days of Capacity', value: '12 Days of Capacity'},
          {
            title: `Int'l Women's Leadership Conference`,
            value: `Int'l Women's Leadership Conference`,
          },
          {title: 'IGOLD Summit', value: 'IGOLD Summit'},
          {title: 'Sexperiment Conference', value: 'Sexperiment Conference'},
          {title: 'LEGIT Conference', value: 'LEGIT Conference'},
          {title: `Int'l Teenagers Summit`, value: `Int'l Teenagers Summit`},
          {title: `Int'l Men's Leadership Summit`, value: `Int'l Men's Leadership Summit`},
          {title: `African Night`, value: `African Night`},
          {title: `Leaders Retreat`, value: `Leaders Retreat`},
          {title: `Christmas Service`, value: `Christmas Service`},
          {title: `New Year Eve`, value: `New Year Eve`},
          {title: `Easter Zoe Convention`, value: `Easter Zoe Convention`},
          {title: `Communion Service`, value: `Communion Service`},
        ],
      },
    },

    {
      title: 'Other Event Title',
      description: 'If event title is not listed above, You can enter any other event title here',
      name: 'other_event',
      type: 'string',
    },

    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      description: 'Enter theme of the event. Example: Overcoming Woman',
      required: true,
    },

    {
      name: 'emphasis',
      title: 'Emphasis',
      type: 'string',
      description: 'Enter emphasis for the theme. example: Rising above challenges and Delays',
    },

    {
      title: 'Event Date',
      name: 'eventDate',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },

    {
      name: 'time',
      title: 'Event Time',
      type: 'string',
      description: 'When is the event holding, e.g 8.00am.',
    },

    {
      name: 'venue',
      title: 'Event Venue',
      type: 'string',
      description: 'Where is event holding. Not more than two words. Example, Church Venue.',
    },

    {
      name: 'startAdvert',
      title: 'Start Advert Date',
      type: 'date',
      description: 'When should this advert start?',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },

    {
      name: 'endAdvert',
      title: 'End Advert Date',
      type: 'date',
      description: 'When should this advert end?',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: `Generate event id.`,
      options: {
        source: 'title',
        maxLength: 90,
      },
    },

    {
      title: 'Type of Event',
      description: 'Selected type of event.',
      name: 'type',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: `Weekly`, value: `Weekly`},
          {title: `Monthly`, value: `Monthly`},
          {title: `Yearly`, value: `Yearly`},
        ],
      },
    },

    {
      title: 'Target Audience',
      description: 'Who is this event for?',
      name: 'audience',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: `Men`, value: `Men`},
          {title: `Women`, value: `Women`},
          {title: `Teens`, value: `Teens`},
          {title: `Ladies`, value: `Ladies`},
          {title: `First Sons and Daughters`, value: `First Sons and Daughters`},
          {title: `Youths`, value: `Youths`},
          {title: `General Public`, value: `General Public`},
          {title: `Ministers`, value: `Ministers`},
          {title: `Campus Outreach`, value: `Campus Outreach`},
        ],
      },
    },

    {
      name: 'featuring',
      title: 'Featuring',
      description: `What do we expect from this event. Separate each with a paragraph. This is not compulsory`,
      type: 'array',
      of: [{type: 'block'}],
    },

    {
      title: 'Event Image',
      name: 'eventImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      description: 'Upload image if any. You can use the search option.',
    },

    {
      title: 'Event Flyer',
      name: 'eventFlyer',
      type: 'image',
      description:
        'Do you want to use a designed flyer to advertise this event. Note that the flyer should will replace every other content on the slider. The flye should be a 3:5 or 1:1 scale to enable nice display',
    },

    {
      name: 'content',
      title: 'About Event',
      description: `introduce and make content about this event`,
      type: 'array',
      of: [{type: 'block'}],
    },

    {
      name: 'afterEventNews',
      title: 'After Event News',
      description: `You can fill this now or come back to edit this form if you intend to share news and highlight after this event has taking place. Add details in paragraphs to enable better presentation on the website`,
      type: 'array',
      of: [{type: 'block'}],
    },

    {
      name: 'removeEventNews',
      title: 'Remove Event News',
      type: 'date',
      description: 'When should this news stop displaying?',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
  ],
}
