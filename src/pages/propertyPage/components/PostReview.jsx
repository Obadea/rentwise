import React from "react";
import RatingControl from "./RatingControl";
import {
  Button,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { postReview, postReviewForShortlet } from "../../../utils/endpoint";
import { toast } from "react-toastify";
import { useAuth } from "../../../utils/AuthContext";
import { SvgSortIcon } from "../../../utils/SvgIcons";

function PostReview({ propertyID, forShortlet }) {
  const [action, setAction] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { token } = useAuth();
  const [review, setReview] = React.useState("");

  const mutation = useMutation({
    mutationFn: forShortlet ? postReviewForShortlet : postReview,
    onSuccess: async (data) => {
      setIsLoading(false);
      setReview("");
      toast(data?.messsage, { type: "success", draggable: true });
      // console.log(data);
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
      <div className="flex justify-between py-6 pb-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
        <p className=" font-medium text-lg text-customdark">Leave a Review</p>
      </div>
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
          });

          console.log(data);
        }}
      >
        {/* <Input
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="you@example.com"
          type="email"
          isDisabled={isLoading}
          variant="bordered"
          className=""
        />{" "}
        <div className="flex w-full gap-4">
          <Input
            errorMessage="Please enter a Title"
            label="Title"
            labelPlacement="outside"
            name="title"
            placeholder="Enter a title"
            type="text"
            isDisabled={isLoading}
            variant="bordered"
            className=""
          />

          <Select
            disableSelectorIconRotation
            label="Rating"
            labelPlacement="outside"
            placeholder="Select"
            selectorIcon={<SvgSortIcon />}
            name="rating"
            variant="bordered"
          >
            <SelectItem key="1">1</SelectItem>
            <SelectItem key="2">2</SelectItem>
            <SelectItem key="3">3</SelectItem>
            <SelectItem key="4">4</SelectItem>
            <SelectItem key="5">5</SelectItem>
          </Select>
        </div> */}

        <div className="flex w-full gap-4">
          <p>Select Rating:</p>
          <RatingControl />
        </div>

        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
          isDisabled={isLoading}
          className=""
          variant="bordered"
        />

        <Textarea
          isRequired
          isClearable
          name="review"
          value={review}
          minRows={5}
          label="Review"
          labelPlacement="outside"
          placeholder="Write a review..."
          onChange={handleTextChange}
          isDisabled={isLoading}
          variant="bordered"
        />
        <div className="flex justify-between w-full mt-8 items-center">
          <Button color="primary" type="submit" isLoading={isLoading}>
            Submit Review
          </Button>
          {/* <div>
            <RatingControl />
          </div> */}
        </div>
      </Form>
    </div>
  );
}

export default PostReview;
