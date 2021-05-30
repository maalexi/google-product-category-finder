export interface CategoryItem {
    id: number;
    level1: string;
    level2?: string;
    level3?: string;
    level4?: string;
    level5?: string;
    level6?: string;
}

export interface SearchResultItem {
    item: CategoryItem;
    refIndex: number;
}

export type SearchResult = Array<SearchResultItem>;