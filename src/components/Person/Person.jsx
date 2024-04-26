import './Person.scss';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>

    {person.age && (
      <p className="Person__age">
        <span>I am {person.age}</span>
      </p>
    )}

    <p className="Person__partner">
      {person.isMarried !== false ? (
        <span>
          {person.partnerName} is my {person.sex === 'm' ? 'wife' : 'husband'}
        </span>
      ) : (
        <span>not married</span>
      )}
    </p>
  </section>
);
