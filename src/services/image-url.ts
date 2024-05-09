import noImage from "../assets/no-image-placeholder.webp";

// 根据传入的图片 URL 进行裁剪处理
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  
  // 得到裁剪目标的起始位置
  const index = url.indexOf(target) + target.length;

  // 根据起始位置将原始 url 进行裁剪处理，将裁剪后的图片 URL 返回
  // 具体操作是在起始位置之前插入 'crop/600/400/' 字符串，表示对图片进行 600x400 大小的裁剪
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
