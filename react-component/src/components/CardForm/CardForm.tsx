import { IFormProjectData } from 'model/CardData';
import React, { Component, createRef, RefObject } from 'react';
import './CardForm.css';

type CardFormState = {
  formRef: RefObject<HTMLFormElement>;
  tagsGroupRef: RefObject<HTMLDivElement>;
  radioGroupRef: RefObject<HTMLDivElement>;
  tagRefs: RefObject<HTMLInputElement>[];
  dateRef: RefObject<HTMLInputElement>;
  nameRef: RefObject<HTMLInputElement>;
  importantRef: RefObject<HTMLInputElement>;
  imgRef: RefObject<HTMLInputElement>;
  creatorRef: RefObject<HTMLSelectElement>;
};

type CardFormProps = {
  submitCallback: (data: IFormProjectData) => void;
};

const TAGS = ['Digital Art', 'Photography', 'Branding', 'Fine Arts'];

export default class CardForm extends Component<CardFormProps, CardFormState> {
  state = {
    formRef: createRef<HTMLFormElement>(),
    tagsGroupRef: createRef<HTMLDivElement>(),
    radioGroupRef: createRef<HTMLDivElement>(),
    tagRefs: TAGS.map(() => createRef<HTMLInputElement>()),
    dateRef: createRef<HTMLInputElement>(),
    nameRef: createRef<HTMLInputElement>(),
    importantRef: createRef<HTMLInputElement>(),
    imgRef: createRef<HTMLInputElement>(),
    creatorRef: createRef<HTMLSelectElement>(),
  };

  constructor(props: CardFormProps) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  createCardData() {
    let answer = true;
    const {
      formRef,
      tagsGroupRef,
      radioGroupRef,
      tagRefs,
      dateRef,
      nameRef,
      importantRef,
      imgRef,
      creatorRef,
    } = this.state;
    if (
      !formRef.current ||
      !tagsGroupRef.current ||
      !radioGroupRef.current ||
      !dateRef.current ||
      !nameRef.current ||
      !importantRef.current ||
      !imgRef.current ||
      !creatorRef.current ||
      tagRefs.every((el) => !el.current)
    ) {
      return;
    }
    const data: IFormProjectData = {
      name: '',
      creator: '',
      tags: [],
      likes: 0,
      views: 0,
      img: '',
      date: new Date(),
      isImportant: false,
    };
    if (nameRef.current.value === '') {
      nameRef.current.classList.add('invalid');
      answer = false;
    } else {
      nameRef.current.classList.remove('invalid');
      data.name = nameRef.current.value;
    }
    if (dateRef.current && !dateRef.current.value) {
      dateRef.current.classList.add('invalid');
      answer = false;
    } else {
      dateRef.current.classList.remove('invalid');
      data.date = new Date(dateRef.current.value);
    }
    if (!tagRefs.some((el) => el.current?.checked)) {
      tagsGroupRef.current.classList.add('invalid');
      answer = false;
    } else {
      tagsGroupRef.current.classList.remove('invalid');
      data.tags = tagRefs
        .filter((el) => el.current && el.current.checked)
        .map((el) => el.current?.value || '');
    }
    if (
      !imgRef.current.files ||
      imgRef.current.files.length === 0 ||
      !imgRef.current.files[0].type.includes('image')
    ) {
      imgRef.current.classList.add('invalid');
      answer = false;
    } else {
      imgRef.current.classList.remove('invalid');
      data.img = URL.createObjectURL(imgRef.current.files[0]);
    }
    if (answer) {
      data.isImportant = importantRef.current.checked;
      data.creator = creatorRef.current.value;
      return data;
    }
    return null;
  }

  onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = this.createCardData();
    if (!data) return;
    this.props.submitCallback(data);
    if (this.state.formRef.current) {
      this.state.formRef.current.classList.add('success');
      setTimeout(() => {
        this.state.formRef.current?.classList.remove('success');
      }, 3000);
      this.state.formRef.current.reset();
    }
    return;
  }

  render() {
    return (
      <form ref={this.state.formRef} className="form" onSubmit={this.onSubmit}>
        <input ref={this.state.nameRef} className="form__text" type="text" placeholder="Name" />
        <div className="error">Invalid name!</div>
        <input ref={this.state.dateRef} className="form__date" type="date" placeholder="Date" />
        <div className="error">Invalid date!</div>
        <div ref={this.state.tagsGroupRef} className="form__group">
          <div className="form__group-name">Tags</div>
          {this.state.tagRefs.map((ref, id) => {
            return (
              <label key={TAGS[id]} className="form__checkbox">
                <input ref={ref} value={TAGS[id]} type="checkbox" name="important" />
                {TAGS[id]}
              </label>
            );
          })}
        </div>
        <div className="error">Minimum one tag required!</div>
        <select ref={this.state.creatorRef} defaultValue="Anonim" className="form__select">
          <option value="Anonim">Anonim</option>
          <option value="God">God</option>
          <option value="Vova">Vova</option>
          <option value="Sluzer">Sluzer</option>
        </select>
        <input ref={this.state.imgRef} className="form__file" type="file" />
        <div className="error">Invalid file!</div>
        <div ref={this.state.radioGroupRef} className="form__group">
          <label className="form__radio">
            <input ref={this.state.importantRef} type="radio" name="important" />
            Important
          </label>
          <label className="form__radio">
            <input type="radio" name="important" defaultChecked />
            Simple
          </label>
        </div>
        <button className="form__btn" type="submit">
          Create
        </button>
      </form>
    );
  }
}

// checkbox - теги
// file upload - изображение
// select - Создатель
