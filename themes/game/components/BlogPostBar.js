import { useGlobal } from '@/lib/global'

/**
 * 文章列表上方嵌入
 * @param {*} props
 * @returns
 */
export default function BlogPostBar(props) {
  const { tag, category } = props
  const { locale } = useGlobal()

  if (tag) {
    return (
      <div className='flex items-center text-xl mt-4 px-2'>
        <i className='mr-2 fas fa-tag' />
        Tags:{tag}
      </div>
    )
  } else if (category) {
    return (
      <div className='flex items-center text-xl mt-4 px-2'>
        <i className='mr-2 fas fa-th' />
       Category:{category}
      </div>
    )
  } else {
    return <></>
  }
}
