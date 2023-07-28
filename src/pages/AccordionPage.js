import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      id: 'nbhghbfvbv',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'jhscgdfvgb',
      label: 'Can I use javascript on a project?',
      content: 'You can use javascript on any project you want. You can use javascript on any project you want. You can use javascript on any project you want.',
    },
    {
      id: 'sdfvbghnjmnhbgf',
      label: 'Can I use css on a project?',
      content: 'You can use css on any project you want. You can use css on any project you want. You can use css on any project you want.',
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
