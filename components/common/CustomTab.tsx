"use client";

import React, { ReactNode, ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tabVariants = cva(
  "px-2 transition-colors duration-200 ease-in-out rounded relative inline-flex",
  {
    variants: {
      selected: {
        true: "bg-transparent",
        false: "bg-white hover:bg-[#e9e9e9]",
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

const lineVariants = cva(
  "absolute bottom-[-3px] left-1/2 transform -translate-x-1/2",
  {
    variants: {
      selected: {
        true: "bg-[#111111] h-[3px]",
        false: "bg-white hover:bg-gray-200",
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

interface TabsProps {
  children: ReactNode;
  onChange: (index: number) => void;
  id: string;
  selectedTab: number;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  onChange,
  id,
  selectedTab,
}) => {
  const tabList = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === TabList) {
      return React.cloneElement(child as ReactElement<any>, {
        selectedTab,
        handleTabClick: onChange,
      });
    }
    return null;
  });

  const tabPanels = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === TabPanel) {
      return React.cloneElement(child as ReactElement<any>, {
        isSelected: selectedTab === child.props.index,
      });
    }
    return null;
  });

  return (
    <div id={id}>
      {tabList}
      {tabPanels}
    </div>
  );
};

interface TabListProps {
  children: ReactNode;
  selectedTab: number;
  handleTabClick: (index: number) => void;
  align?: "left" | "center" | "right";
}

export const TabList: React.FC<TabListProps> = ({
  children,
  selectedTab,
  handleTabClick,
  align = "left",
}) => {
  const alignmentClass =
    align === "center"
      ? "justify-center"
      : align === "right"
      ? "justify-end"
      : "justify-start";

  return (
    <div className={`flex ${alignmentClass}`}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<any>, {
            isSelected: selectedTab === index,
            onClick: () => handleTabClick(index),
          });
        }
        return null;
      })}
    </div>
  );
};

interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabVariants> {
  children: ReactNode;
  isSelected: boolean;
}

export const Tab: React.FC<TabProps> = ({
  children,
  isSelected,
  ...props
}) => {
  return (
    <button className={cn(tabVariants({ selected: isSelected }))} {...props}>
      <div className="p-2 rounded-[8px] text-base font-medium text-[#111111]">
        {children}
      </div>
      <div
        className={cn(lineVariants({ selected: isSelected }))}
        style={{
          width: "calc(100% - 32px)",
        }}
      />
    </button>
  );
};

interface TabPanelProps {
  children: ReactNode;
  isSelected: boolean;
  index: number;
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, isSelected }) => {
  return isSelected ? <div className="p-4">{children}</div> : null;
};