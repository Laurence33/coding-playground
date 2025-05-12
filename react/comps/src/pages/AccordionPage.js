import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 'abc',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want. You can use react on any project you want.'
    },
    {
      id: 'cde',
      label: 'Can I use Javascript on a project?',
      content: 'You can use React on any project you want. You can use react on any project you want.'
    },
    {
      id: 'efg',
      label: 'Can I use CSS on a project?',
      content: 'You can use React on any project you want. You can use react on any project you want.'
    }
  ]
  return <div>
    <Accordion items={items} />
  </div>

}

export default AccordionPage;