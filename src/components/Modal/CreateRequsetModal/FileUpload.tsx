import { useRef } from "react";
import { Box, Flex, Image, Input, List, ListItem, Text, Button } from "@chakra-ui/react";
import { useRequestFormContext } from "../Context/useRequestFormContext";
import { MdClose } from "react-icons/md";

const FileUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { form, addFiles, handleRemove } = useRequestFormContext();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    addFiles(Array.from(e.dataTransfer.files));
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files));
      e.target.value = "";
    }
  };

  return (
    <Box mt={6}>
      <Text fontWeight="medium" color="#374151" display={{base:"none", md:"block"}}>
        Прикрепите файлы
      </Text>
      <Flex w="100%" gap={1} flexDirection={{base: "column", md: "row"}}>
        <Box
          mt={2}
          w={{base:"100%", md:"50%"}}
          p={8}
          borderWidth="2px"
          borderStyle="dashed"
          borderColor="#d1d5db"
          borderRadius="xl"
          textAlign="center"
          color="#6b7280"
          cursor="pointer"
          bg="#f9fafb"
          transition="background 0.2s"
          _hover={{ bg: "#f3f4f6" }}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputRef.current?.click()}
        >
          Выберите или перетащите файл
          <Input
            ref={inputRef}
            id="fileInput"
            type="file"
            multiple
            display="none"
            onChange={handleFileInput}
          />
        </Box>

        {form.files.length > 0 && (
          <List mt={2} spacing={2} w={{base:"100%", md:"50%"}}>
            {form.files.map((file, index) => {
              const isImage = file.type.startsWith("image/");
              const previewUrl = isImage ? URL.createObjectURL(file) : null;

              return (
                <ListItem
                  key={`${file.name}-${index}`}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  bg="white"
                  borderWidth="1px"
                  borderColor="#e5e7eb"
                  p={2}
                  borderRadius="lg"
                >
                  <Flex align="center" gap={3}>
                    {isImage ? (
                      <Image
                        src={previewUrl!}
                        w="2rem"
                        h="1.5rem"
                        objectFit="cover"
                        borderRadius="md"
                        borderWidth="1px"
                        borderColor="#e5e7eb"
                        onLoad={() => previewUrl && URL.revokeObjectURL(previewUrl)}
                      />
                    ) : (
                      <Flex
                        w="2rem"
                        h="1.5rem"
                        align="center"
                        justify="center"
                        bg="#e5e7eb"
                        fontSize="xs"
                        borderRadius="md"
                      >
                        FILE
                      </Flex>
                    )}
                    <Text fontSize="sm" color="#374151">
                      {file.name} — {(file.size / 1024).toFixed(1)} KB
                    </Text>
                  </Flex>

                  <Button
                    onClick={() => handleRemove(index)}
                    variant="ghost"
                    color="#000"
                    fontSize="md"
                    px={2}
                    _hover={{ color: "#b91c1c" }}
                  >
                    <MdClose size="25px"/>
                  </Button>
                </ListItem>
              );
            })}
          </List>
        )}
      </Flex>
    </Box>
  );
};

export default FileUpload;
