

const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between items-center" >
        <span className='text-3xl text-white font-bold tracking-tight'>Hospedajá</span>
        <span className='text-white font-bold tracking-tight flex gap-4'>
          <p className='cursor-pointer'>Politica de Privacidade</p>
          <p className='cursor-pointer'>Termos de serviço</p>
        </span>
      </div>
    </div>
  )
}

export default Footer;