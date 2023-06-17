import styles from './TopicContent.module.scss';

interface ITopicContentProps{
  topic: string;
  children: string;
  fontSize?:string;
}

export const TopicContent = ({ topic, children, fontSize }: ITopicContentProps) => {
  const style = {
    fontSize
  }
  return (
    <>
      <div className={styles.topic} style={style}>
        {topic}
      </div>
      <div className={styles.textContent}>
        {children}
      </div>
    </>
  );
};