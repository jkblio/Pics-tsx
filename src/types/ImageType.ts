export interface IImage {
    id?: string,
    "created-at"?: string,
    "updated_at"?: string,
    "promoted_at"?: string,
    width?: number,
    height?: number,
    color?: string,
    description?: string,
    "alt_description"?: string,
    urls?: IImageUrls,
    links?: IImageLinks,
    categories?: Array<any>, //todo
    likes?: number,
    "liked_by_user"?: boolean,
    "current_user_collections"?: Array<any>, //todo
    user?: IUser,
    tags?: Array<ITags>
  }
  
  interface IImageUrls {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string
  }
  
  interface IImageLinks {
    self: string,
    html: string,
    download: string,
    "download_location": string
  }
  
  interface IUser {
    id: string,
    "updated_at": string,
    username: string,
    name: string,
    "first_name": string,
    "last_name": string,
    "twitter_username": string | null,
    "portfolio_url": string,
    bio: any | null,
    location: string,
    links: IUserLinks,
    "profile_image": IUserProfileImage,
    "instagram_username": string,
    "total_collections": number,
    "total_likes": number,
    "total_photos": number,
    "accepted_tos": boolean
  }
  
  interface IUserLinks {
    self: string,
    html: string,
    photos: string,
    likes: string,
    portfolio: string,
    following: string,
    followers: string
  }
  
  interface IUserProfileImage {
    small: string,
    medium: string,
    large: string
  }
  
  interface ITags {
    type: string,
    title: string,
    source?: IImageSource,
  }
  
  interface IImageSource {
    ancestry: IImageSourceAncestry,
    title: string,
    subtitle: string,
    description: string,
    "meta_title": string,
    "meta_description": string,
    "cover_photo": IImageSourceCoverPhoto
  }
  
  interface IImageSourceAncestry {
    type: IImageSourceAncestryType,
    category: IImageSourceAncestryCategory,
    subcategory: IImageSourceAncestrySubcategory
  }
  
  interface IImageSourceAncestryType {
    slug: string,
    "pretty_slug": string
  }
  
  interface IImageSourceAncestryCategory {
    slug: string,
    "pretty_slug": string
  }
  
  interface IImageSourceAncestrySubcategory {
    slug: string,
    "pretty_slug": string
  }
  
  interface IImageSourceCoverPhoto {
    id: string,
    "created_at": string,
    "updated_at": string,
    "promoted_at": string,
    width: number,
    height: number,
    color: string,
    description: string,
    "alt_description": string,
    urls: IImageSourceCoverPhotoUrls,
    links: IImageSourceCoverPhotoLinks,
    categories: Array<any>, //todo
    likes: number,
    "liked_by_user": boolean,
    "current_user_collections": Array<any>, //todo
    user: IImageSourceCoverPhotoUser
  }
  
  interface IImageSourceCoverPhotoUrls {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string
  }
  
  interface IImageSourceCoverPhotoLinks {
    self: string,
    html: string,
    download: string,
    "download_location": string
  }
  
  interface IImageSourceCoverPhotoUser {
    id: string,
    "updated_at": string,
    username: string,
    name: string,
    "first_name": string,
    "last_name": string,
    "twitter_username": string | null,
    "portfolio_url": string,
    bio: any | null,
    location: string,
    links: IImageSourceCoverPhotoUserLinks,
    "profile_image": IImageSourceCoverPhotoUserProfileImage,
    "instagram_username": string,
    "total_collections": number,
    "total_likes": number,
    "total_photos": number,
    "accepted_tos": boolean
  }
  
  interface IImageSourceCoverPhotoUserLinks {
    self: string,
    html: string,
    photos: string,
    likes: string,
    portfolio: string,
    following: string,
    followers: string
  }
  
  interface IImageSourceCoverPhotoUserProfileImage {
    small: string,
    medium: string,
    large: string,
  }