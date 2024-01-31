import React from "react";
import { Card } from "@jobber/components/Card";
import { Spinner } from "@jobber/components/Spinner";
import EmptyStateCard from "components/EmptyStateCard";
import { List } from "@jobber/components/List";
import { ListItemProps } from "@jobber/components/dist/List/ListItem";
import styles from "./JobList.module.scss";

interface JobListProps {
  jobs: ListItemProps[];
  title?: string;
  isFetchingJobs: boolean;
}

const JobList = ({ jobs, isFetchingJobs, title }: JobListProps) => {
  return (
    <div className={styles.cardWrapper}>
      {isFetchingJobs ? (
        <Spinner size="small" />
      ) : jobs.length > 0 ? (
        <>
          {title ? <h3>{title}</h3> : null}
          <List items={jobs} />
        </>
      ) : (
        <EmptyStateCard />
      )}
    </div>
  );
};

export default JobList;