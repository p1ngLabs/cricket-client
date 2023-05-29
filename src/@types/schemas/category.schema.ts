interface ICategory {
  id: number;
  parent_id: number;
  name: string;
  slug: string;
  active: boolean;
}

export default ICategory;
