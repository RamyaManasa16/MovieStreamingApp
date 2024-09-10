import SliderComponent from '../slider/SliderComponent';

interface props {
  title: any;
  items: any;
}

const Upcomming = ({ title, items }: props) => {
  return (
    <>
      <section className="upcome">
        <div className="container">
          <div className="heading flexSB">
            <h1>{title}</h1>
          </div>
          <div className='content'>
            <SliderComponent type={title} items={items} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Upcomming;
