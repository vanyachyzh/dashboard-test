import { ReactNode } from 'react';
import './SearchForm.scss';

type Props = {
  children: ReactNode,
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>
};

export const SearchFrom: React.FC<Props> = ({ children, query, setQuery }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-form">
      <div className="search-form__top-section">
        <div className="search-form__info">
          <h3 className="search-form__title">All customers</h3>
          <span className="search-form__category">Active Members</span>
        </div>

        <input
          value={query}
          onChange={onChange}
          className="search-form__field"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="search-form__table">
        {children}
      </div>
    </div>
  )
};
