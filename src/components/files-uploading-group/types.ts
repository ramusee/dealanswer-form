interface FilesUploadingGroupProps {
  title: string;
}

interface InputDescBlockProps {
  inputTitle: string;
  description: string;
  onUpload: (file: File) => void;
}

export type { FilesUploadingGroupProps, InputDescBlockProps };
