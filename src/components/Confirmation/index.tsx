import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const schema = yup.object().shape({
  guests: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Campo obrigatório'),
      age: yup
        .number()
        .required('Campo obrigatório')
        .positive('Idade inválida')
        .integer('Idade inválida'),
    }),
  ),
});

type Guest = {
  name: string;
  age: number;
};

const Confirmation: React.FC = () => {
  const { control, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      guests: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'guests',
  });

  const handleAddGuest = () => {
    append({ name: '', age: 0 });
  };

  const handleRemoveGuest = (index: number) => {
    remove(index);
  };

  const onSubmit = (data: { guests: Guest[] | undefined }) => {
    if (data.guests) {
      console.log(data.guests);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        {'nome aqui'}
        <br />
        Esperamos que estejam ansiosos(as) assim como nós para o nosso casamento.
        Gostaríamos de solicitar a confirmação de presença tanto sua quanto dos seus
        acompanhantes. Sua presença será muito especial para nós nesse momento tão
        importante.
      </p>
      <p>
        Por favor, preencha o formulário abaixo com os nomes e idades dos convidados
        adicionais que irão acompanhá-lo(a) no casamento.
      </p>
      {fields.map((guest, index) => (
        <FormContainer key={guest.id}>
          <FormRow>
            <label htmlFor={`name-${guest.id}`}>Nome:</label>
            <input
              type="text"
              id={`name-${guest.id}`}
              min={0}
              onChange={(e) => setValue(`guests[${index}].name` as any, e.target.value)}
            />
            {index >= 0 && (
              <button type="button" onClick={() => handleRemoveGuest(index)}>
                Remover
              </button>
            )}
          </FormRow>
          <FormRow>
            <label htmlFor={`age-${guest.id}`}>Idade:</label>
            <input
              type="number"
              id={`age-${guest.id}`}
              min={0}
              onChange={(e) =>
                setValue(`guests[${index}].age` as any, parseInt(e.target.value, 10))
              }
            />
          </FormRow>
          {formState.errors.guests && formState.errors.guests[index] && (
            <span>{formState.errors.guests[index]?.name?.message}</span>
          )}
          {formState.errors.guests && formState.errors.guests[index] && (
            <span>{formState.errors.guests[index]?.age?.message}</span>
          )}
        </FormContainer>
      ))}
      <ButtonContainer>
        <button type="button" onClick={handleAddGuest}>
          Adicionar convidado
        </button>
      </ButtonContainer>
      <ButtonContainer>
        <button type="submit">Confirmar</button>
      </ButtonContainer>
    </form>
  );
};

export default Confirmation;
