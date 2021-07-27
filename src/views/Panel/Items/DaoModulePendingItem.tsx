import React from "react";
import { ModulePendingItem } from "./ModulePendingItem";
import { LoadingIcon } from "../../../components/icons/LoadingIcon";
import { ReactComponent as ModulePendingImg } from "../../../assets/images/dao-module-pending.svg";
import { ReactComponent as RemoveModulePendingImg } from "../../../assets/images/remove-pending-state.svg";
import { ReactComponent as AddIcon } from "../../../assets/icons/add-icon.svg";
import { ReactComponent as RemoveIcon } from "../../../assets/icons/delete-icon.svg";

interface DaoModulePendingItemProps {
  remove?: boolean;
  instant?: boolean;
}

export const DaoModulePendingItem = ({
  remove,
  instant,
}: DaoModulePendingItemProps) => {
  if (remove) {
    if (instant)
      return (
        <ModulePendingItem
          title="DAO Module Removal"
          linkText="Transaction confirming..."
          image={<LoadingIcon icon={<RemoveIcon />} />}
        />
      );

    return (
      <ModulePendingItem
        title="DAO Module Removal"
        linkText="Awaiting approval"
        image={<RemoveModulePendingImg />}
      />
    );
  }

  if (instant)
    return (
      <ModulePendingItem
        title="DAO Module"
        linkText="Transaction confirming..."
        image={<LoadingIcon icon={<AddIcon />} />}
      />
    );

  return (
    <ModulePendingItem
      title="DAO Module"
      linkText="Awaiting approval"
      image={<ModulePendingImg />}
    />
  );
};
