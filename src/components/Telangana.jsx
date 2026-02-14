import React from 'react';
import PlantPageLayout from './PlantPageLayout';

const Telangana = () => {
    const plants = [
        {
            title: "Subsidiary Company - Anjani Portland Cement Limited (APCL)",
            description: "In 2014–15, the company purchased a 75% equity stake in Anjani Portland Cement Limited, a Telangana State company with a manufacturing capacity of 1.00 MTPA and located in the Nalgonda District.",
            images: [
                "https://www.chettinadcement.com/wp-content/uploads/2024/08/Picture2-2.jpg"
            ]
        }
    ];

    return (
        <PlantPageLayout
            stateName="Telangana"
            plants={plants}
            headImage="https://www.chettinadcement.com/wp-content/uploads/2024/08/telangana-banner.jpg"
        />
    );
};

export default Telangana;
