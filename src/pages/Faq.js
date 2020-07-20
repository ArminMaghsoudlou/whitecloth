import React, { Component } from "react";
import Title from "../components/Title";
import Faq from "react-faq-component";
import { ChefConsumer } from "../context";

export default class FaqPage extends Component {
  render() {

    const main_faq_styles = {
      bgColor: "#f3f3f3",
      titleTextColor: "#444444",
      rowTitleColor: "#191970",
      rowContentColor: "#6c757d",
      // rowContentColor: 'grey',
      arrowColor: "#232528",
    };

    const faq_config = {
      animate: true,
      //arrowIcon: "V",
    };

    const faq_data = {
      rows: [
        {
          title: "How does this service work?",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. 
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae. 
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
          title: "Nunc maximus, magna at ultricies elementum",
          content:
            "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
          title: "What is the package version",
          content: "v1.0.0",
        },
        {
            title: "How does this service work?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. 
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae. 
                Fusce sed commodo purus, at tempus turpis.`,
          },
          {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
              "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
          },
          {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
              Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
              Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
              Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
          },
          {
            title: "What is the package version",
            content: "v1.0.0",
          },
      ],
    };
    return (
      <div className="col-10">
        <Title name="frequently asked questions" />
        <div>
          <Faq data={faq_data} styles={main_faq_styles} config={faq_config} />
        </div>
      </div>
    );
  }
}
