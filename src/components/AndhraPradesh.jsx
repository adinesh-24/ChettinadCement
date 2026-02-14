import React from 'react';
import PlantPageLayout from './PlantPageLayout';

const AndhraPradesh = () => {
    const plants = [
        {
            title: "Dachepalli Plant - Andhra Pradesh",
            description: "In Dachepalli Village, Guntur District, Andhra Pradesh, a green field integrated project with a 2.10 MTPA cement production capacity was put into service in 2019–20.",
            images: [
                "https://www.chettinadcement.com/wp-content/uploads/2024/08/dachepalli-1.png",
                "https://www.chettinadcement.com/wp-content/uploads/2024/08/dachepalli-1.png",
                "https://www.chettinadcement.com/wp-content/uploads/2024/08/dachepalli-3.png"
            ]
        },
        {
            title: "Visakhapatnam Grinding Unit",
            description: "In 2021-22, a standalone cement grinding unit project with a cement production capacity of 2.00 MTPA was commissioned in Vishakhapatnam, Andhra Pradesh.",
            images: [
                "https://www.chettinadcement.com/wp-content/uploads/2024/08/dachepalli-3.png"
            ]
        },
        {
            title: "Subsidiary Company - Bhavya Cements Private Limited",
            description: "The subsidiary, APCL, purchased 93.53% of Bhavya Cements Private Limited’s total share capital in 2021–2022. Tangeda, Near Dachepalli, Guntur District, Andhra Pradesh, India is home to the company’s manufacturing facility. It can produce 1.20 MTPA at this capacity.",
            images: [
                "https://www.chettinadcement.com/wp-content/uploads/2024/08/Picture1-1024x510.jpg"
            ]
        }
    ];

    return (
        <PlantPageLayout
            stateName="Andhra Pradesh"
            plants={plants}
            headImage="https://www.chettinadcement.com/wp-content/uploads/2024/08/Andhra-prasdesh-2.jpg"
        />
    );
};

export default AndhraPradesh;
