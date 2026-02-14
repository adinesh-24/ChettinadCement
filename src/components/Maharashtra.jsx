import React from 'react';
import PlantPageLayout from './PlantPageLayout';

const Maharashtra = () => {
    const plants = [
        {
            title: "Solapur Grinding Unit - Maharashtra",
            description: "In 2016-17, a cement grinding unit with a capacity of 1MTPA was installed in Solapur, Maharashtra. In 2019-20, production capacity at this unit was increased to 2.00 MTPA.",
            images: [
                "https://www.chettinadcement.com/wp-content/uploads/2024/08/1-768x511.png",
                "https://www.chettinadcement.com/wp-content/uploads/2024/08/2-768x511.png"
            ]
        }
    ];

    return (
        <PlantPageLayout
            stateName="Maharashtra"
            plants={plants}
            headImage="https://www.chettinadcement.com/wp-content/uploads/2024/08/maharastra-banner.jpg"
        />
    );
};

export default Maharashtra;
