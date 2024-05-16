"use client";
import { useMountedState } from "react-use";

import { NewAccoutntSheet } from "@/features/accounts/components/new-account-sheet";
import { EditAccoutntSheet } from "@/features/accounts/components/edit-account-sheet";
import { NewCategorySheet } from "@/features/categories/components/new-category-sheet";
import { EditCategorySheet } from "@/features/categories/components/edit-category-sheet";


export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <NewAccoutntSheet />
      <EditAccoutntSheet/>


      <NewCategorySheet/>
      <EditCategorySheet/>
    </>
  );
};
