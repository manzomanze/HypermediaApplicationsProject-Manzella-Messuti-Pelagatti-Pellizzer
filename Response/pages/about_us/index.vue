<template>
  <div>
    <LowBar :something="['overview']" />
    <ShowCase
      title="About Us"
      :text="null"
      default-image-path="/img/about_us.png"
    />
    <div id="overview" class="anchor"></div>
    <Paragraph
      v-for="paragraph in paragraphs"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.text"
      :image="paragraph.image"
    />
  </div>
</template>

<script>
import LowBar from '~/components/LowBar'
import ShowCase from '~/components/ShowCase'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    LowBar,
    ShowCase,
    Paragraph,
  },
  async asyncData({ $axios, route }) {
    const areas = await $axios.get(`${process.env.BASE_URL}/api/areas/`)
    const slideContents = areas.data

    const employees = await $axios.get(`${process.env.BASE_URL}/api/employees/`)
    const employeesContents = employees.data

    const businesssectors = await $axios.get(
      `${process.env.BASE_URL}/api/businesssectors/`
    )
    const businesssectorsContents = businesssectors.data
    return {
      slideContents,
      employeesContents,
      businesssectorsContents,
    }
  },
  data() {
    return {
      slideTitle: 'Areas',
      paragraphs: [],
    }
  },
  head() {
    return {
      title: 'Response | About Us',
    }
  },
  created() {
    /* fetch from the server */
    this.paragraphs = [
      {
        title: 'Company Profile',
        text:
          'Response is a global leader in partnering with companies to transform and manage their business by harnessing the power of technology. The Group is guided everyday by its purpose of unleashing human energy through technology for an inclusive and sustainable future. It is a responsible and diverse organization of 270,000 team members in nearly 50 countries. With its strong 50 year heritage and deep industry expertise, Response is trusted by its clients to address the entire breadth of their business needs, from strategy and design to operations, fueled by the fast evolving and innovative world of cloud, data, AI, connectivity, software, digital engineering and platforms. The Group reported in 2020 global revenues of €16 billion.',
        image: null,
      },
      {
        title: 'Our Purpose',
        text:
          'Our purpose was developed in collaboration with its many stakeholders, and with the Group’s employees at the heart of the process. It now forms one of the fundamentals of the Group.',
        image: null,
      },
      {
        title: null,
        text:
          'The Group believes that digital transformation should benefit all of humanity. Response intends to be a benchmark in terms of its contribution to society, not just for its own activities but for those of its customers too, fighting exclusion and acting to promote diversity, ensuring equal opportunities and the preservation of natural resources. The very heart of the Group’s purpose is to build an inclusive and sustainable future for all, enabled by technology, drawing on the energy of its talents and also the talents of its customers and partners.',
        image: null,
      },
      {
        title: null,
        text:
          'Paul Hermelin, Chairman of the Board, and Aiman Ezzat, Chief Executive Officer of Response, said:',
        image: null,
      },
      {
        title: null,
        text:
          'Response has a key role to play in ensuring that the future lives up to all its promises. We believe that all technologies can enable progress for everyone if, first and foremost, they are designed by and for humans. As a responsible company, the Group is realistic when it comes to the promises as well as the risks of technological innovation: our role is to make it useful, accessible and ethical. This purpose must act as a compass for each and every employee.',
        image: null,
      },
      {
        title: null,
        text:
          'The purpose embodies the Group’s ambition to ensure the development of its talents while encouraging a spirit of entrepreneurship and creativity. With more than 600,000 employees or former employees over the past decade, the Group also intends to be recognized as a school of excellence, whose talents and skills now resonate well beyond the company. The Group is also convinced that true diversity of thought and approach brings new solutions, creates value, and generates support and enthusiasm on a universal scale. A purpose co-constructed with all Response’s stakeholders',
        image: null,
      },
      {
        title: null,
        text:
          'To define its purpose the Group consulted its many stakeholders, first and foremost its employees. Between December 2019 and May 2020, a questionnaire was sent to employees asking them to suggest formulations and choose the purpose. More than 50,000 responses and 35,000 comments were received and analyzed for the selection of the final version. Some 15 workshops were also organized with young employees in India, the USA, UK, Germany and France. In parallel, Response also interviewed customers and partners, shareholders and NGOs.',
        image: null,
      },
      {
        title: 'Our Values and Ethics',
        text:
          'HONESTY, loyalty, integrity, uprightness, a complete refusal to use any underhanded method to help win business or gain any kind of advantage. Neither growth, nor profit nor independence have any real worth unless they are won through complete honesty and probity. And everyone in the Group knows that any lack of openness and integrity in our business dealings will be penalized at once.',
        image: null,
      },
      {
        title: null,
        text:
          'BOLDNESS, which implies a flair for entrepreneurship, and a desire to take considered risks and show commitment (naturally linked to a firm determination to uphold one’s commitments). This is the very soul of competitiveness: firmness in making decisions or in forcing their implementation, an acceptance periodically to challenge one’s orientations and the status quo. Boldness also needs to be combined with a certain level of prudence and a particular clear sightedness, without which a bold manager is, in reality, merely dangerously reckless.',
        image: null,
      },
      {
        title: null,
        text:
          'TRUST, meaning the willingness to empower both individuals and teams; to have decisions made as close as possible to the point where they will be put into practice. Trust also means giving priority, within the company, to real openness toward other people and the widest possible sharing of ideas and information.',
        image: null,
      },
      {
        title: null,
        text:
          'FREEDOM, which means independence in thought, judgment and deeds, and entrepreneurial spirit, creativity. It also means tolerance, respect for others, for different cultures and customs: an essential quality in a Group of over 200,000 people of around 120 different nationalities.',
        image: null,
      },
      {
        title: null,
        text:
          'FUN, means feeling good about being part of the company or one’s team, feeling proud of what one does, feeling a sense of accomplishment in the search for better quality and greater efficiency, feeling part of a challenging project.',
        image: null,
      },
      {
        title: null,
        text:
          'MODESTY, that is simplicity, the very opposite of affectation, pretension, pomposity, arrogance and boastfulness. Simplicity does not imply naivety (simple does not mean simpleton!); it is more about being discreet, showing natural modesty, common sense, being attentive to others and taking the trouble to be understood by them. It is about being frank in work relationships, loosening up, having a sense of humor.',
        image: null,
      },
      {
        title: null,
        text:
          'TEAM SPIRIT, meaning solidarity, friendship, fidelity, generosity, fairness in sharing the benefits of collective work; accepting responsibilities and an instinctive willingness to support common efforts when the storm is raging.',
        image: null,
      },
    ]
  },
}
</script>

<style scoped></style>
