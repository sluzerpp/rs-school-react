import React, { useState } from 'react';
import './CardForm.css';
import { useForm } from 'react-hook-form';

type CardFormProps = {
  submitCallback: (data: CardFormData) => void;
};

const TAGS = ['Digital Art', 'Photography', 'Branding', 'Fine Arts'];

export type CardForm = {
  name: string;
  date: Date;
  tags: string[];
  creator: string;
  img: FileList;
  isImportant: boolean;
};

export type CardFormData = {
  name: string;
  date: string;
  tags: string[];
  creator: string;
  img: string;
  isImportant: boolean;
};

export default function CardForm({ submitCallback }: CardFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CardForm>({
    defaultValues: { creator: 'Anonim' },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const fileValidate = (files: FileList) => {
    if (!files[0].type.includes('image')) {
      return 'Only IMGs are valid!  ';
    }
    return true;
  };

  const onSubmit = (data: CardForm) => {
    submitCallback({
      ...data,
      date: data.date.toLocaleString(),
      img: URL.createObjectURL(data.img[0]),
    });
    setIsSuccess(true);
    reset();
    setTimeout(() => {
      setIsSuccess(false);
    }, 1500);
  };

  return (
    <form className={`form ${isSuccess ? 'success' : ''}`} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={`form__text ${errors.name ? 'invalid' : ''}`}
        type="text"
        placeholder="Name"
        {...register('name', { required: 'This field is required!' })}
      />
      <div className="error">{errors.name?.message}</div>
      <input
        className={`form__date ${errors.date ? 'invalid' : ''}`}
        type="date"
        placeholder="Date"
        {...register('date', { required: 'This field is required!', valueAsDate: true })}
      />
      <div className="error">{errors.date?.message}</div>
      <div className={`form__group ${errors.tags ? 'invalid' : ''}`}>
        <div className="form__group-name">Tags</div>
        {TAGS.map((tag) => {
          return (
            <label key={tag} className="form__checkbox">
              <input
                value={tag}
                type="checkbox"
                {...register('tags', { required: 'Please select tags!' })}
              />
              {tag}
            </label>
          );
        })}
      </div>
      <div className="error">{errors.tags?.message}</div>
      <select {...register('creator')} className="form__select">
        <option value="Anonim">Anonim</option>
        <option value="God">God</option>
        <option value="Vova">Vova</option>
        <option value="Sluzer">Sluzer</option>
      </select>
      <input
        className={`form__file ${errors.img ? 'invalid' : ''}`}
        type="file"
        {...register('img', {
          required: 'The image field is required!',
          validate: fileValidate || 'Only IMGs are valid!',
        })}
      />
      <div className="error">{errors.img?.message}</div>
      <div className="form__group">
        <label className="form__radio">
          <input type="radio" {...register('isImportant')} />
          Important
        </label>
        <label className="form__radio">
          <input type="radio" name="isImportant" defaultChecked />
          Simple
        </label>
      </div>
      <button className="form__btn" type="submit">
        Create
      </button>
    </form>
  );
}
