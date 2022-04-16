import RadioGroup from './RadioGroup';
import { useState } from 'react';
import data from '../data.json';

const SelectModelOpt = () => {
  const [artefactos, setArtefactos] = useState('');
  const [cocinas, setCocinas] = useState('');
  const [termotanques, setTermotanques] = useState('');

  const handleArtefactosChange = e => {
    setArtefactos(e.target.value);
    if (e.target.value === 'cocinas') setTermotanques('');
    if (e.target.value === 'termotanques') setCocinas('');
  };
  const handleCocinasChange = e => {
    setCocinas(e.target.value);
  };
  const handleTermotanquesChange = e => {
    setTermotanques(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <RadioGroup
        formLabel={data.artefactos.label}
        onChange={handleArtefactosChange}
        options={data.artefactos.options}
      />
      {artefactos === 'cocinas' && (
        <RadioGroup
          formLabel={data.lineas.cocinas.label}
          onChange={handleCocinasChange}
          options={data.lineas.cocinas.options}
        />
      )}
      {artefactos === 'termotanques' && (
        <RadioGroup
          formLabel={data.lineas.termos.label}
          onChange={handleTermotanquesChange}
          options={data.lineas.termos.options}
        />
      )}
      {termotanques === 'termotanquesACQ' && (
        <RadioGroup
          formLabel={data.modelos.termos.acq.label}
          options={data.modelos.termos.acq.options}
        />
      )}
      {termotanques === 'termotanquesEL' && (
        <RadioGroup
          formLabel={data.modelos.termos.electricos.label}
          options={data.modelos.termos.electricos.options}
        />
      )}
      {cocinas === 'cocinasQ' && (
        <RadioGroup
          formLabel={data.modelos.cocinas.q.label}
          options={data.modelos.cocinas.q.options}
        />
      )}
      {cocinas === 'cocinasE' && (
        <RadioGroup
          formLabel={data.modelos.cocinas.e.label}
          options={data.modelos.cocinas.e.options}
        />
      )}
    </div>
  );
};

export default SelectModelOpt;
