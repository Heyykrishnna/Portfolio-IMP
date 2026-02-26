export const ABOUT_PROFILE_IMAGE =
  'https://ik.imagekit.io/puc7mghnh/ChatGPT%20Image%20Feb%2021,%202026,%2003_13_46%20PM.png';

export const SERVICE_IMAGES = {
  strategy:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  webDesign:
    'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
  branding:
    'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop',
};

export const PROJECT_IMAGES: Record<
  string,
  { coverImage?: string; galleryImages?: [string?, string?, string?, string?] }
> = {
  elysiar: {
    coverImage: '',
    galleryImages: ['', '', '', ''],
  },
  'revox-forms': {
    coverImage: '',
    galleryImages: ['', '', '', ''],
  },
  'every-second': {
    coverImage: '',
    galleryImages: ['', '', '', ''],
  },
  'timeless-mastery': {
    coverImage: '',
    galleryImages: ['', '', '', ''],
  },
};
