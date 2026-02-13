
const SingleBlogPage = async({params,}:{
  params:Promise<{slug:string}>
}) => {
  const {slug} = await params
  console.log(slug)
  return (
    <div>
      <p>{slug}</p>
    </div>
  )
}

export default SingleBlogPage
