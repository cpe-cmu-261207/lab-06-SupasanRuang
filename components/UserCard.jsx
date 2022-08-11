import React, { useState } from "react";
import UserCardDetail from "./UserCardDetail";

import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
export default function UserCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border-bottom"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {isOpen ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {isOpen ? (
        <UserCardDetail email={props.email} address={props.address} />
      ) : null}
    </div>
  );
}
