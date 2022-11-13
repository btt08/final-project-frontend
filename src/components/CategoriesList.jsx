import { memo } from 'react'
import { useContext } from 'react';
import DataContext from '../context/dataContext';
import { FaBorderAll, FaMicrochip, FaGreaterThan } from 'react-icons/fa'
import { FiSmartphone } from 'react-icons/fi'
import gpuIcon from '../assets/gpu-icon.png'

const CategoriesList = memo(() => {
  const { cat, setCat } = useContext(DataContext);

  return (
    <section className="cat-list">
      <ul>
        <li className={cat === '' ? 'active' : ''}
          onClick={() => setCat('')}>
          <FaBorderAll />
          <p>Todas Categorías</p>
          <FaGreaterThan />
        </li>
        <li className={cat === 'gpu' ? 'active' : ''}
          onClick={() => setCat('gpu')}>
          <img src={gpuIcon} alt='' />
          <p>Tarjetas Gráficas</p>
          <FaGreaterThan />
        </li>
        <li className={cat === 'cpu' ? 'active' : ''}
          onClick={() => setCat('cpu')}>
          <FaMicrochip />
          <p>Procesadores</p>
          <FaGreaterThan />
        </li>
        <li className={cat === 'smartphone' ? 'active' : ''}
          onClick={() => setCat('smartphone')}>
          <FiSmartphone />
          <p>Smartphones</p>
          <FaGreaterThan />
        </li>
      </ul>
    </section>
  )
})
export default CategoriesList