import { useRef } from "react";
import { CategoryItem } from "../@types";
import styles from "../styles/CategoryCard.module.scss";
import { copyToClipboard } from "../utils/copyToClipboard";

interface Props {
  item: CategoryItem;
}

const CategoryCard = ({ item }: Props) => {

  const CopyButton = useRef<HTMLButtonElement>(null);

  const handleCopy = () => {
    copyToClipboard(item.id);
    CopyButton.current?.classList.add(styles.animate);
    setTimeout(() => CopyButton.current?.classList.remove(styles.animate), 1000)
  }

  return (
    <div className={styles.card}>
      <div className={styles.id}>
        <span>Item Category Number: </span>
        {item.id}
        <button ref={CopyButton} className={styles.copy} onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className={styles.category}>
        <span>Category: </span>
        {item.level1}
        {item.level2 && ` > ${item.level2}`}
        {item.level3 && ` > ${item.level3}`}
        {item.level4 && ` > ${item.level4}`}
        {item.level5 && ` > ${item.level5}`}
        {item.level6 && ` > ${item.level6}`}
      </div>
    </div>
  );
};

export default CategoryCard;
