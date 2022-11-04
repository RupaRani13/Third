<template>
    <div>
        <!-- <course-details :courseProgram="$route.params.courseurl"></course-details> -->
        <!-- <course-details :courseProgram="$route.params.producturl"></course-details> -->
        {{$route.params.producturl}}
        hii
        <CourseProductDetails :productProgram= "$route.params.producturl"></CourseProductDetails>
    </div>
</template>