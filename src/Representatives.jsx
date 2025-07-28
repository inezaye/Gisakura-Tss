import './Representatives.css';

const Representatives = () => {
  const reps = [
    {
      title: 'The School Principal',
      name: 'KUMBUKA Jean Baptist',
      phone: '0788420328',
      image: '/images/Gisakura.png',
    },
    {
      title: 'The School Bursar',
      name: 'SHUMBUSHO Jean Claude',
      phone: '0780630497',
      image: '/images/Gisakura.png',
    },
    {
      title: 'The School Secretary',
      name: 'BAMABASI Fred',
      phone: '0788758163',
      image: '/images/Gisakura.png',
    },
    {
      title: ' Dean of Studies I',
      name: 'UWASENGA Speciose',
      phone: '0788977657',
      image: '/images/Gisakura.png',
    },
    {
      title: ' Dean of Studies II',
      name: 'UMUHIRE Diane',
      phone: '0788977657',
      image: '/images/Gisakura.png',
    }
  ];

  return (
    <section className="representatives-section" id="section3">
      <h2 className="section-title">School Representatives</h2>
      <hr />
      <div className="representatives-container">
        {reps.map((rep, index) => (
          <div className="rep-card" key={index}>
            <h3 className="rep-title">{rep.title}</h3>
            <p className="rep-name">{rep.name}</p>
            <p className="rep-phone">
              📞 {rep.phone}
            </p>
            <div className="rep-image-wrapper">
              <img className="rep-image" src={rep.image} alt={rep.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Representatives;
