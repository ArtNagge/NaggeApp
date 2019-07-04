import React from "react";
import InfoBlock from "../InfoBlock";

const UserInfoBlocks = ({store}) => {
    return store.infoUser.blocks.map((item, idx) => (
        <InfoBlock
            key={idx}
            title={item.title}
            description={item.description}
            height={item.height}
            icon={item.icon}
        />
    ));
};
export default UserInfoBlocks;