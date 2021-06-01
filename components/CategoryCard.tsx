import { CategoryItem } from "../@types";
import styles from '../styles/CategoryCard.module.scss';

interface Props {
  item: CategoryItem;
}

const CategoryCard = ({ item }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.id}>
        <span>Item Category Number: </span>
        {item.id}
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
