import { useState } from 'react';
import ProductAddOption from '../components/ProductAddOption';
import ProductRegister from '../components/ProductRegister';
import useProductManageStore from '../hooks/useProductManageStore';

export default function ProductRegisterPage() {
  const productManageStore = useProductManageStore();

  const [mode, setMode] = useState(false);

  const { options } = productManageStore;

  const handleClickCreate = (data) => {
    const productImformation = {
      title: data.title,
      trainer: data.trainer,
      options,
    };

    productManageStore.create(productImformation);
  };

  if (mode) {
    return (
      <div>
        <ProductAddOption
          options={options}
          setMode={setMode}
        />
      </div>
    );
  }

  return (
    <div>
      <ProductRegister
        handleClickCreate={handleClickCreate}
        setMode={setMode}
      />
    </div>
  );
}
