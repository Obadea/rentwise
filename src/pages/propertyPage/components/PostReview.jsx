import React from "react";
import RatingControl from "./RatingControl";
import { Button, Form, Textarea } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { postReview } from "../../../utils/endpoint";
import { toast } from "react-toastify";
import { useAuth } from "../../../utils/AuthContext";

function PostReview({ propertyID }) {
  const [action, setAction] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { token } = useAuth();
  const [review, setReview] = React.useState("");

  const mutation = useMutation({
    mutationFn: postReview,
    onSuccess: async (data) => {
      setIsLoading(false);
      setReview("");
      toast(data?.message, { type: "success", draggable: true });
    },

    onError: async (err) => {
      setIsLoading(false);
      toast(err?.message, {
        type: "error",
        draggable: true,
      });
      console.log(err);
    },
  });

  const handleTextChange = (e) => {
    setReview(e.target.value);
  };

  return (
    <div className="px-4 py-6 lg:p-10 flex flex-col bg-white gap-4 mt-16 ">
      <Form
        validationBehavior="native"
        onReset={() => setAction("reset")}
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));
          setAction(`submit ${JSON.stringify(data)}`);
          setIsLoading(true);
          mutation.mutate({
            propertyID: propertyID,
            userData: data,
            token: token,
          });

          console.log(data);
        }}
      >
        <Textarea
          name="review"
          value={review}
          minRows={5}
          label="Description"
          placeholder="Enter your review..."
          onChange={handleTextChange}
          isDisabled={isLoading}
        />

        <div className="flex justify-between w-full mt-8 items-center">
          <Button
            color="primary"
            type="submit"
            isDisabled={!token}
            isLoading={isLoading}
          >
            {token ? "Submit Review" : "Please login to post"}
          </Button>
          <div>
            <RatingControl />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default PostReview;
