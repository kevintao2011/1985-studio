import PropTypes from 'prop-types';
export default function ProductCard({imgurl,label,description}) {
  return (
    <div className="flex flex-col rounded-md p-2  flex-nowrap ">
      <div className="w-max">
        <img src={imgurl} width={"300px"} alt="" className="object-cover aspect-square rounded-md "/>
      </div>
      <div className="text-start font-bold">{label}</div>
      <div className="text-start">{description}</div>
    </div>
  )
}
ProductCard.propTypes = {
  label:PropTypes.string,
  description:PropTypes.string
}
