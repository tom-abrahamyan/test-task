import type { FileUploadProps } from "@/data/types";

const FileUpload = ({ files, addFiles }: FileUploadProps) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    addFiles(Array.from(e.dataTransfer.files));
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files));
      e.target.value = ""; // reset input
    }
  };

  const handleRemove = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    addFiles(newFiles);
  };

  return (
    <div className="mt-6">
      <label className="font-medium text-gray-700">Прикрепите файлы</label>
      <div className="w-full flex gap-1">
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="mt-2 w-[50%] p-8 border-2 border-dashed border-gray-300 rounded-xl text-center text-gray-500 cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          Выберите или перетащите файл
          <input
            id="fileInput"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileInput}
          />
        </div>

        {files.length > 0 && (
          <ul className="mt-2 space-y-2">
            {files.map((file, index) => {
              const isImage = file.type.startsWith("image/");
              const previewUrl = isImage ? URL.createObjectURL(file) : null;

              return (
                <li
                  key={index}
                  className="w-full flex items-center justify-between bg-white border p-2 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {isImage ? (
                      <img
                        src={previewUrl!}
                        className="w-8 h-6 object-cover rounded border"
                        onLoad={() => URL.revokeObjectURL(previewUrl!)}
                      />
                    ) : (
                      <div className="w-8 h-6 flex items-center justify-center bg-gray-200 text-xs rounded">
                        FILE
                      </div>
                    )}
                    <span className="text-sm text-gray-700">
                      {file.name} — {(file.size / 1024).toFixed(1)} KB
                    </span>
                  </div>

                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 hover:text-red-700 px-2"
                  >
                    ✕
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
